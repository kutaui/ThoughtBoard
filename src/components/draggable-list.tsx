'use client';
import { useDroppable } from '@dnd-kit/core';

export default function DraggableList() {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };
  return (
    <section className="rounded-m w-60 rounded-xl border border-black bg-neutral-900">
      <div className="p-4 font-semibold text-gray-200">
        <h2>Progress</h2>
      </div>
      <div ref={setNodeRef} className="h-24" style={style}></div>
    </section>
  );
}
