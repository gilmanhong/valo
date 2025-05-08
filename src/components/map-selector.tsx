"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import type { MapData } from "@/types/map"
import { Dices } from "lucide-react"

interface MapSelectorProps {
  selectedMap: MapData | null
  onSelectMap: () => void
}

export default function MapSelector({ selectedMap, onSelectMap }: MapSelectorProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <Card className="w-full aspect-video relative overflow-hidden">
        <CardContent className="p-0 h-full flex items-center justify-center">
          {selectedMap ? (
            <div className="relative w-full h-full">
              <Image
                src={selectedMap.image || "/placeholder.svg"}
                alt={selectedMap.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                <h2 className="text-xl font-bold">{selectedMap.name}</h2>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              <Dices className="w-16 h-16 mb-4 text-muted-foreground" />
              <p className="text-lg text-muted-foreground">버튼을 클릭하여 랜덤 맵을 선택하세요</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Button size="lg" onClick={onSelectMap} className="text-lg px-8 py-6 h-auto">
        <Dices className="mr-2 h-5 w-5" />
        랜덤 맵 선택하기
      </Button>
    </div>
  )
}
