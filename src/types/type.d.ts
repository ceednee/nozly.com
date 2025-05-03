import { z } from "zod"
import React from "react"

// Custom Zod refinement for React components
const reactComponentSchema = z.custom<React.ComponentType<{ size?: number }>>(value => {
  // Check if the value is a function (component)
  return typeof value === 'function'
}, {
  message: 'Must be a valid React component'
})

export const AppSidebarItemsSchema = z.array(z.object({
  versions: z.array(z.string()),
  navMain: z.array(z.object({
    title: z.string(),
    url: z.string(),
    icon: reactComponentSchema,
    isActive: z.boolean().optional(),
    items: z.array(z.object({
      title: z.string(),
      url: z.string(),
      description: z.string().optional(),
      icon: reactComponentSchema,
      isActive: z.boolean().optional()
    })).optional()
  }))
}))

export type AppSidebarItemsProps = z.infer<typeof AppSidebarItemsSchema>[number]