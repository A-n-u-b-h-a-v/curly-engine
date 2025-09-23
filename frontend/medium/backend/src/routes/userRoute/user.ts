import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode,verify, sign } from 'hono/jwt'
import { signupInput,signinInput } from "@anubhav_gusain/medium-common"


export const userRoute = new Hono<{
  
    Bindings:{
      DATABASE_URL: string,
      JWT_SECRET: string
    
  }
}>();

userRoute.post('/signup', async(c) => {
    const body =await c.req.json()
    const { success }=signupInput.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({error: 'Invalid input'})
    }
    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())
      
      try {
        const user = await prisma.user.create({
          data: {
            email: body.email,
            password: body.password,
            name:body.name
          }
        })
        const token=await sign({id: user.id},c.env.JWT_SECRET )
        return c.json({jwt:token})
        
      } catch (error) {
        
        c.status(411)
        return c.text('Something went wrong')
      }
      
  
  })
  userRoute.post('/signin', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL}).$extends(withAccelerate())
      const body =await c.req.json()
      const { success }=signinInput.safeParse(body);
      try {
        const user = await prisma.user.findFirst({
          where: {
            email: body.email, password: body.password
          }})
          if(!user){
            return c.json({error: 'Invalid credentials'})
          }
          const token= await sign({id: user.id},c.env.JWT_SECRET)
          return c.json({jwt:token})
      } catch (error) {
        c.status(403)
        return c.text('Something went wrong')
      }
    
  })