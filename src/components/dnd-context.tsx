'use client';
import React from 'react';
import { DndContext as DNDContext } from '@dnd-kit/core';

export function DndContext({ children }: { children: React.ReactNode }) {
  return <DNDContext>{children}</DNDContext>;
}
