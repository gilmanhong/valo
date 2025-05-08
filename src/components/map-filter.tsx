"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { MapData } from "@/types/map"

interface MapFilterProps {
  maps: MapData[]
  onToggleMap: (mapId: string) => void
}

export default function MapFilter({ maps, onToggleMap }: MapFilterProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>맵 필터</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {maps.map((map) => (
            <div key={map.id} className="flex items-center space-x-2">
              <Checkbox id={`map-${map.id}`} checked={map.enabled} onCheckedChange={() => onToggleMap(map.id)} />
              <label
                htmlFor={`map-${map.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {map.name}
              </label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
