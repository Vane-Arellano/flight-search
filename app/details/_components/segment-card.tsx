import { Card, CardContent } from "@/components/ui/card"

export const SegmentComponent = () => {
  return (
    <Card className="w-full bg-zinc-200/25 h-fit hover:bg-slate-300/25">
      <CardContent className="flex flex-col justify-between gap-4">
        <div className="flex flex-col justify-between">
          <p>Segment 1</p>
          <p>YYYY-MM-DD HH:mm - YYYY-MM-DD HH:mm</p>
          <p>San Francisco (SFO) - New York (JFK)</p>
          <p>Aeromexico (AM)</p>
        </div>
        <div className="bottom-section flex flex-row justify-between">
          
        </div>
      </CardContent>
    </Card>
  )
}