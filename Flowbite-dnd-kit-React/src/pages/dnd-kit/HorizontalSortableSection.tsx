import { Button, Card } from 'flowbite-react'
import { useState } from 'react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import type { DragEndEvent } from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable'
import {
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { 
  ShowcaseCard, 
  ShowcaseSubheading
} from '../../components/ShowcaseTheme'

interface CardItem {
  id: string
  content: string
}

interface SortableItemProps {
  id: string
  children: React.ReactNode
}

function SortableItem({ id, children }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  )
}

export function HorizontalSortableSection() {
  const [cards, setCards] = useState<CardItem[]>([
    { id: 'card-1', content: 'Design System' },
    { id: 'card-2', content: 'Components' },
    { id: 'card-3', content: 'Utilities' },
    { id: 'card-4', content: 'Layouts' },
  ])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (active.id !== over?.id) {
      setCards((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id)
        const newIndex = items.findIndex(item => item.id === over?.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }
  return (
    <ShowcaseCard>
      <ShowcaseSubheading>Horizontal Sortable Cards</ShowcaseSubheading>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={cards} strategy={horizontalListSortingStrategy}>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {cards.map(card => (
              <SortableItem key={card.id} id={card.id}>                <Card className="min-w-[200px] cursor-move hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
                  <h5 className="text-lg font-bold tracking-tight text-white">
                    {card.content}
                  </h5>
                  <p className="font-normal text-gray-300">
                    Drag me around to reorder!
                  </p>
                  <Button size="sm">                    Action
                  </Button>
                </Card>
              </SortableItem>
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </ShowcaseCard>
  )
}
