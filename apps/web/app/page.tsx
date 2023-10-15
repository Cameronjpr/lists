import { Button } from '@ui/components/button'
import { Card, CardContent, CardHeader } from '@ui/components/card'
import { Separator } from '@ui/components/separator'
import { Icon } from '@ui/components/icon'
import Image from 'next/image'
import Link from 'next/link'

export default function Page(): JSX.Element {
  return (
    <main className="">
      <h1>My list</h1>
      <Separator />
      <ul className="flex pt-16">
        <Card className="w-72">
          <CardHeader>
            <Link href="https://www.hush-uk.com/scout-double-breasted-wool-coat-mediterranean-blue/009911-1601.html">
              <Image
                src="https://www.hush-uk.com/dw/image/v2/BDNS_PRD/on/demandware.static/-/Sites-hush-master-catalog/default/dw5e1032c3/large/009911-1601-11.jpg?sw=580&q=90"
                width="288"
                height="200"
                alt="Double breasted wool coat"
              />
            </Link>
          </CardHeader>
          <CardContent>
            <h2>Double breasted wool coat</h2>
            <Button>Buy</Button>
          </CardContent>
        </Card>
      </ul>
    </main>
  )
}
