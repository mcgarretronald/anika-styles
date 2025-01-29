
export default function Hero() {
  return (
    <div className=" grid md:grid-cols-2 lg:gap-[30%] gap-5 p-8">
        <section className="lg:mt-5 ">
            <div className="gap-5 flex flex-col lg:mt-12">
                <h1 className="md:text-4xl text-3xl">Something Amazing is Coming Soon!</h1>
                <p className="text-sm">We&apos;re thrilled to announce that our website is launching soon! 🎉</p>
            </div>
        </section>
        <section className="flex  justify-end flex-col gap-5">
            <div className="text">
                <h1 className="text-3xl mb-2">Our Services:</h1>
                <ul className="list-disc  ml-10 list-outside">
                    <li>Wig Styling</li>
                    <li>Custom Wig Making</li>
                    <li>Hair Ventilation</li>
                    <li>Wig Revamping</li>
                    <li>Wig Reconstruction</li>
                    <li>Lace Refills / Torn Lace Repair</li>
                    <li>Wig Repair</li>
                    <li>Wig Laundry</li>
                </ul>
            </div>
        </section>
    </div>
  )
}
