'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useDraggable } from '@dnd-kit/core';

export default function DraggableCard() {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable',
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <Card
      className="z-10 h-24 w-40"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <CardHeader>
        <CardTitle className="text-xl">Card Title</CardTitle>
      </CardHeader>
    </Card>
  );
}
