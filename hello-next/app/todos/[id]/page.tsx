import { Metadata, ResolvingMetadata } from "next";
import { prisma } from "@/app/utils/db";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = params;
  const todo = await prisma.todo.findUnique({ where: { id: Number(id) } });
  if (!todo) {
    throw new Error("not found");
  }
  return {
    title: todo.title,
  };
}

export default async function TodoDetail({
  params,
}: {
  params: { id: number };
}) {
  const todo = await prisma.todo.findFirst({
    where: { id: Number(params.id) },
  });
  if (!todo) {
    notFound();
  }
  return <div>TodoDetail {todo.title}</div>;
}
