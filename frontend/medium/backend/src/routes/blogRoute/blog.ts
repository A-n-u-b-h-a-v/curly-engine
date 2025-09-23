import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {verify } from 'hono/jwt'
import { blogInput,blogUpdateInput } from "@anubhav_gusain/medium-common"

export const blogRoute = new Hono<{
    Bindings:{
      DATABASE_URL: string,
      JWT_SECRET: string
    
  },
    Variables:{  
        userId: string
    }
}>();


blogRoute.use("/*",async (c,next) => {
    
    const authHeader = c.req.header('Authorization') 
    if(!authHeader){
      return c.json({error: 'No token provided'})
    }
    try {
        const response=await verify(authHeader,c.env.JWT_SECRET)
        
        if(response){
            c.set('userId',response.id as string)
            await next()
        } 
    } catch (error) {
        c.status(403) 
        return c.json({error:"something went wrong"})
    }
  })
  
  
blogRoute.get("/bulk", async (c) => {
      const prisma = new PrismaClient({
          datasourceUrl : c.env.DATABASE_URL
        }).$extends(withAccelerate())
      const posts = await prisma.post.findMany({
        select:{
            title:true,
            content:true,  
            author:{
                select:{name:true}
            },
            id:true,
            createdAt:true,
            

        }
      })
      return c.json({posts})
  })  
  
blogRoute.post("/", async(c) => {
    const body = await c.req.json()
    const { success }=blogInput.safeParse(body);
    if(!success){
        c.status(411)
        return c.json({error: 'Invalid input'})
    }
    const userId= c.get('userId')
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())
    
    const blog= await prisma.post.create({
            data:{
                title: body.title,
                content: body.content,
                authorId: userId
            }
        })
    return c.json({id:blog.id})
    })

blogRoute.put('/', async(c) => {
    const body =await c.req.json()
    const { success }=blogUpdateInput.safeParse(body);
    if(!success){
        c.status(411)
        return c.json({error: 'Invalid input'})
    }
    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())
    
    const post = await prisma.post.update({
            where:{
                id: body.id
            },
            data:{
                title: body.title,
                content: body.content,
                
            }
        })
    return c.json({id:post.id})
    
}) 

blogRoute.get('/:id', async(c) => {
    
    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())
    try {
        const blog = await prisma.post.findFirst({
            where:{
                id: Number(c.req.param('id'))
            }
        })  
        return c.json({blog})  
    } catch (error) {
        return c.json({error: 'Something went wrong'})
    }
})
  

  
