"use server";

import { redirect } from "next/navigation";
import { getCurrentUser } from "../auth";
import { prisma } from "../prisma";
import { z } from "zod";

const ProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.coerce.number().nonnegative("Price must be non negative"),
  quantity: z.coerce.number().int().min(0, "Quantity must be at least 0"),
  sku: z.string().optional(),
  lowStockAt: z.coerce.number().int().min(0).optional(),
});

export async function deleteProduct(formData: FormData) {
  const user = await getCurrentUser();
  const id = String(formData.get("id") || "");

  await prisma.product.deleteMany({
    where: { id: id, userId: user?.id },
  });
}
export async function createProduct(formData: FormData) {
  const user = await getCurrentUser();
  const parsedData = ProductSchema.safeParse({
    name: formData.get("name") || "",
    price: formData.get("price"),
    quantity: formData.get("quantity"),
    sku: formData.get("sku") || undefined,
    lowStockAt: formData.get("lowStockAt") || undefined,
  });

  if (!parsedData.success) {
    throw new Error("Invalid form data");
  }

  try {
    await prisma.product.create({
      data: { ...parsedData.data, userId: user!.id },
    });
    redirect("/inventory");
  } catch (error) {
    throw new Error("Failed to create product", error as { cause: unknown });
  }
}
