import Image from "next/image"

export const Navbar = () => {
    return <div className="flex p-3 mb-3">
        <h1 className="flex items-center">
            <svg className="w-10 h-10 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3">
                <path d="M240-360h96q19 0 32.5-13.5T382-406v-148q0-19-13.5-32.5T336-600h-96v240Zm46-46v-148h50v148h-50Zm149 46h98v-46h-82v-52h52v-46h-52v-50h82v-46h-98q-13 0-21.5 8.5T405-570v180q0 13 8.5 21.5T435-360Zm206-1q13 0 22.5-8.5T676-391l56-209h-48l-43 164-43-164h-48l56 209q3 13 12.5 21.5T641-361ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
            </svg>
            <span className="font font-bold text-2xl">LOGO</span>
        </h1>
        <div className="flex relative">
            <input className="ml-10 block p-2 w-[18rem] border-0 outline-0 px-5 pr-10 bg-[#191919] rounded-md" type="search" placeholder="search" />
            <svg className="w-4 h-10 absolute top-0 right-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3">
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
        </div>
        <ul className="flex ml-auto">
            <li className="mr-3">
                <a href="">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3">
                        <path d="M500-482q29-32 44.5-73t15.5-85q0-44-15.5-85T500-798q60 8 100 53t40 105q0 60-40 105t-100 53Zm220 322v-120q0-36-16-68.5T662-406q51 18 94.5 46.5T800-280v120h-80Zm80-280v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Zm-480-40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM0-160v-112q0-34 17.5-62.5T64-378q62-31 126-46.5T320-440q66 0 130 15.5T576-378q29 15 46.5 43.5T640-272v112H0Zm320-400q33 0 56.5-23.5T400-640q0-33-23.5-56.5T320-720q-33 0-56.5 23.5T240-640q0 33 23.5 56.5T320-560ZM80-240h480v-32q0-11-5.5-20T540-306q-54-27-109-40.5T320-360q-56 0-111 13.5T100-306q-9 5-14.5 14T80-272v32Zm240-400Zm0 400Z" />
                    </svg>
                </a>
            </li>
            <li className="mr-3">
                <a href="">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3">
                        <path d="M280-160q-33 0-56.5-23.5T200-240v-370L40-800h760q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H280Zm-68-560 68 80v400h520v-480H212Zm328 460 56-56-44-44h168v-80H360l180 180ZM360-520h360L540-700l-56 56 44 44H360v80Zm146 40Z" />
                    </svg>
                </a>
            </li>
            <li className="mr-3">
                <a href="">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3">
                        <path d="M440-360h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                    </svg>
                </a>
            </li>
            <li>
                <a href="">
                    <Image src="/profile.png" alt="profile picture" width="28" height="28" />
                </a>
            </li>
        </ul>
    </div>
}