import Image from "next/image"

export const Stories = () => {
    return <div>
        <h2 className="font-bold text-2xl mb-3">Stories</h2>
        <div className="flex gap-1">
            <div className="relative grow">
                <Image className="aspect-2/3 rounded-xl" src="/portrait2.jpg" alt="portrait" width="150" height="150" />
                <div className="flex items-center absolute bottom-2 left-[50%] translate-x-[-50%]">
                    <span className="mr-2 w-6 border-3 h-6 bg bg-[url(/portrait2.jpg)] bg-cover bg-center rounded-full"></span>
                    <span className="font-bold text-sm">Elizabeth</span>
                </div>
            </div>
            <div className="relative grow">
                <Image className="aspect-2/3 rounded-xl" src="/portrait1.jpg" alt="portrait" width="150" height="150" />
                <div className="flex items-center absolute bottom-2 left-[50%] translate-x-[-50%]">
                    <span className="mr-2 w-6 border-3 h-6 bg bg-[url(/portrait1.jpg)] bg-cover bg-center rounded-full"></span>
                    <span className="font-bold text-sm">Elizabeth</span>
                </div>
            </div>
            <div className="relative grow">
                <Image className="aspect-2/3 rounded-xl" src="/portrait3.jpg" alt="portrait" width="150" height="150" />
                <div className="flex items-center absolute bottom-2 left-[50%] translate-x-[-50%]">
                    <span className="mr-2 w-6 border-3 h-6 bg bg-[url(/portrait3.jpg)] bg-cover bg-center rounded-full"></span>
                    <span className="font-bold text-sm">Elizabeth</span>
                </div>
            </div>
            <div className="relative grow">
                <Image className="aspect-2/3 rounded-xl" src="/portrait4.jpg" alt="portrait" width="150" height="150" />
                <div className="flex items-center absolute bottom-2 left-[50%] translate-x-[-50%]">
                    <span className="mr-2 w-6 border-3 h-6 bg bg-[url(/portrait4.jpg)] bg-cover bg-center rounded-full"></span>
                    <span className="font-bold text-sm">Elizabeth</span>
                </div>
            </div>
            <div className="relative grow">
                <Image className="aspect-2/3 rounded-xl" src="/portrait1.jpg" alt="portrait" width="150" height="150" />
                <div className="flex items-center absolute bottom-2 left-[50%] translate-x-[-50%]">
                    <span className="mr-2 w-6 border-3 h-6 bg bg-[url(/portrait1.jpg)] bg-cover bg-center rounded-full"></span>
                    <span className="font-bold text-sm">Elizabeth</span>
                </div>
            </div>
            <div className="relative grow">
                <Image className="aspect-2/3 rounded-xl" src="/portrait2.jpg" alt="portrait" width="150" height="150" />
                <div className="flex items-center absolute bottom-2 left-[50%] translate-x-[-50%]">
                    <span className="mr-2 w-6 border-3 h-6 bg bg-[url(/portrait2.jpg)] bg-cover bg-center rounded-full"></span>
                    <span className="font-bold text-sm">Elizabeth</span>
                </div>
            </div>
        </div>

        <div className="mt-10">
            <div className="flex items-center mb-3">
                <h2 className="font-bold text-2xl">Recent Posts</h2>
                <ul className="flex items-center ml-auto">
                    <li className="mr-6"><a href="">
                        Feeds
                    </a></li>
                    <li className="mr-6"><a href="">
                        All
                    </a></li>
                    <li className="mr-6"><a href="">
                        Following
                    </a></li>
                    <li className="mr-6"><a href="">
                        Latest
                    </a></li>
                    <li><a href="">
                        Popular
                    </a></li>
                </ul>
            </div>
            <div className="flex gap-4">
                <div className="basis-[33%]">
                    <Image className="rounded-xl w-full mb-3" src="/nature1.jpg" alt="nature" height={300} width={400} />
                    <h3 className="font-bold text-xl mb-3">Lorem, ipsum.</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod consequatur repellat dolores quia. In, autem?</p>
                </div>
                <div className="basis-[33%]">
                    <Image className="rounded-xl w-full mb-3" src="/nature2.jpg" alt="nature" height={300} width={400} />
                    <h3 className="font-bold text-xl mb-3">Lorem, ipsum.</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod consequatur repellat dolores quia. In, autem?</p>
                </div>
                <div className="basis-[33%]">
                    <Image className="rounded-xl w-full mb-3" src="/nature3.jpg" alt="nature" height={300} width={400} />
                    <h3 className="font-bold text-xl mb-3">Lorem, ipsum.</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod consequatur repellat dolores quia. In, autem?</p>
                </div>
            </div>
        </div>
    </div>
}