"use client"

import { useState } from "react"
import MapSelector from "@/components/map-selector"
import MapFilter from "@/components/map-filter"
import type { MapData } from "@/types/map"

export default function Home() {
  const [maps, setMaps] = useState<MapData[]>([
    { id: "ascent", name: "어센트", image: "/maps/ascent.jpg", enabled: true },
    { id: "bind", name: "바인드", image: "/maps/bind.jpg", enabled: true },
    { id: "haven", name: "헤이븐", image: "/maps/haven.jpg", enabled: true },
    { id: "split", name: "스플릿", image: "/maps/split.jpg", enabled: true },
    { id: "icebox", name: "아이스박스", image: "/maps/icebox.jpg", enabled: true },
    { id: "breeze", name: "브리즈", image: "/maps/breeze.jpg", enabled: true },
    { id: "fracture", name: "프랙처", image: "/maps/fracture.jpg", enabled: true },
    { id: "pearl", name: "펄", image: "/maps/pearl.jpg", enabled: true },
    { id: "lotus", name: "로터스", image: "/maps/lotus.jpg", enabled: true },
    { id: "sunset", name: "선셋", image: "/maps/sunset.jpg", enabled: true },
    { id: "abyss", name: "어비스", image: "/maps/abyss.jpg", enabled: true }, // 어비스 추가
  ])

  const [selectedMap, setSelectedMap] = useState<MapData | null>(null)

  const toggleMapEnabled = (mapId: string) => {
    setMaps(maps.map((map) => (map.id === mapId ? { ...map, enabled: !map.enabled } : map)))
  }

  const selectRandomMap = () => {
    const enabledMaps = maps.filter((map) => map.enabled)
    if (enabledMaps.length === 0) {
      alert("선택 가능한 맵이 없습니다. 최소 하나의 맵을 활성화해주세요.")
      return
    }

    const randomIndex = Math.floor(Math.random() * enabledMaps.length)
    setSelectedMap(enabledMaps[randomIndex])
  }

  return (
    <main className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mt-8 mb-12">발로란트 랜덤 맵 추첨기</h1>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <MapSelector selectedMap={selectedMap} onSelectMap={selectRandomMap} />
        </div>

        <div className="w-full md:w-80">
          <MapFilter maps={maps} onToggleMap={toggleMapEnabled} />
        </div>
      </div>
    </main>
  )
}
