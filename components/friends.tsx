import Image from "next/image"

export const Friends = () => {
    return <div className="p-3">
        <div className="flex relative mb-6">
            <input className="block p-2 w-60 border-0 outline-0 px-5 pl-10 bg-[#191919] rounded-md" type="search" placeholder="search friends..." />
            <svg className="w-4 h-10 absolute top-0 left-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3">
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
        </div>

        <h2 className="mb-6">Friends</h2>

        <ul>
            <li className="mb-6">
                <a className="flex items-center" href="">
                    <Image className="w-7 h-7 mr-2 rounded-md" src="/person1.png" alt="profile" height="20" width="30" />
                    <span>John Wick</span>
                    <span className="text-xs ml-auto font-bold text-[#cbcbcb]">10 min</span>
                </a>
            </li>
            <li className="mb-6">
                <a className="flex items-center" href="">
                    <Image className="w-7 h-7 mr-2 rounded-md" src="/person2.png" alt="profile" height="20" width="30" />
                    <span>Donald Trump</span>
                    <span className="h-2 w-2 bg-green-500 rounded-full ml-auto" />
                </a>
            </li>
            <li className="mb-6">
                <a className="flex items-center" href="">
                    <Image className="w-7 h-7 mr-2 rounded-md" src="/person3.png" alt="profile" height="20" width="30" />
                    <span>Vladmir Putin</span>
                    <span className="h-2 w-2 bg-green-500 rounded-full ml-auto" />
                </a>
            </li>
            <li className="mb-6">
                <a className="flex items-center" href="">
                    <Image className="w-7 h-7 mr-2 rounded-md" src="/person4.png" alt="profile" height="20" width="30" />
                    <span>Henry Cavil</span>
                    <span className="text-xs ml-auto font-bold text-[#cbcbcb]">3 min</span>
                </a>
            </li>
            <li className="mb-6">
                <a className="flex items-center" href="">
                    <Image className="w-7 h-7 mr-2 rounded-md" src="/person5.png" alt="profile" height="20" width="30" />
                    <span>Tom Cruise</span>
                    <span className="text-xs ml-auto font-bold text-[#cbcbcb]">5 min</span>
                </a>
            </li>
            <li className="mb-12">
                <a className="flex items-center" href="">
                    <Image className="w-7 h-7 mr-2 rounded-md" src="/person6.png" alt="profile" height="20" width="30" />
                    <span>Keanu Reeves</span>
                    <span className="h-2 w-2 bg-green-500 rounded-full ml-auto" />
                </a>
            </li>
        </ul>

        <h2 className="mb-6">Groups</h2>

        <ul>
            <li className="mb-6">
                <a className="flex items-center" href="">
                    <Image className="w-7 h-7 mr-2 rounded-md" src="/fc26.png" alt="fc 26" height="20" width="30" />
                    <span>FC 26</span>
                    <span className="text-xs ml-auto font-bold text-[#cbcbcb]">1hr</span>
                </a>
            </li>
            <li>
                <a className="flex items-center" href="">
                    <Image className="w-7 h-7 mr-2 rounded-md" src="/bmw.png" alt="black myth wukong" height="20" width="30" />
                    <span>Black Myth Wukong</span>
                    <span className="h-2 w-2 bg-green-500 rounded-full ml-auto" />
                </a>
            </li>
        </ul>
    </div>
}