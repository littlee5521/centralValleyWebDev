import Hero from "./ui/homepage/hero";
import WhatYouGet from "./ui/homepage/whatyouget";
export default function Home() {
  return (
    <main className={`flex min-h-fit flex-col items-center justify-between`}>
      <Hero></Hero>
      <WhatYouGet></WhatYouGet>
    </main>
  );
}
