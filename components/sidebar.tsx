import Image from "next/image"

export const Sidebar = () => {
    return <div className="p-3 basis-52 shrink-0">
        <ul>
            <li className="mb-6">
                <a className="flex items-center" href="">
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3">
                        <path d="M200-120q-33 0-56.5-23.5T120-200q0-33 23.5-56.5T200-280q33 0 56.5 23.5T280-200q0 33-23.5 56.5T200-120Zm480 0q0-117-44-218.5T516-516q-76-76-177.5-120T120-680v-120q142 0 265 53t216 146q93 93 146 216t53 265H680Zm-240 0q0-67-25-124.5T346-346q-44-44-101.5-69T120-440v-120q92 0 171.5 34.5T431-431q60 60 94.5 139.5T560-120H440Z" />
                    </svg>
                    <span>Feeds</span>
                </a>
            </li>
            <li className="mb-6">
                <a className="flex items-center" href="">
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3">
                        <path d="M480-40 360-160H200q-33 0-56.5-23.5T120-240v-560q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v560q0 33-23.5 56.5T760-160H600L480-40ZM200-286q54-53 125.5-83.5T480-400q83 0 154.5 30.5T760-286v-514H200v514Zm280-194q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM280-240h400v-10q-42-35-93-52.5T480-320q-56 0-107 17.5T280-250v10Zm200-320q-25 0-42.5-17.5T420-620q0-25 17.5-42.5T480-680q25 0 42.5 17.5T540-620q0 25-17.5 42.5T480-560Zm0 17Z" />
                    </svg>
                    <span>Friends</span>
                </a>
            </li>
            <li className="mb-6">
                <a className="flex items-center" href="">
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3">
                        <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm80 240v-80h400v80H280Zm0 160v-80h280v80H280Z" />
                    </svg>
                    <span>Events</span>
                </a>
            </li>
            <li className="mb-6">
                <a className="flex items-center" href="">
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3">
                        <path d="M200-320h400L462-500l-92 120-62-80-108 140Zm-40 160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z" />
                    </svg>
                    <span>Watch Videos</span>
                </a>
            </li>
            <li className="mb-6">
                <a className="flex items-center" href="">
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3">
                        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z" />
                    </svg>
                    <span>Photos</span>
                </a>
            </li>
            <li className="mb-12">
                <a className="flex items-center" href="">
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3">
                        <path d="M160-160q-33 0-56.5-23.5T80-240v-400q0-33 23.5-56.5T160-720h240l80-80h320q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm73-280h207v-207L233-440Zm-73-40 160-160H160v160Zm0 120v120h640v-480H520v280q0 33-23.5 56.5T440-360H160Zm280-160Z" />
                    </svg>
                    <span>Files</span>
                </a>
            </li>
        </ul>
        <div>
            <h2 className="mb-6">Page you may like</h2>
            <ul>
                <li className="mb-6">
                    <a className="flex items-center" href="">
                        <Image className="w-6 h-6 mr-2 rounded-md" src="/nature.jpg" alt="nature" height="20" width="30" />
                        <span>Nature</span>
                    </a>
                </li>
                <li className="mb-6">
                    <a className="flex items-center" href="">
                        <Image className="w-6 h-6 mr-2 rounded-md" src="/adventure.jpg" alt="adventure" height="20" width="30" />
                        <span>Adventure</span>
                    </a>
                </li>
                <li className="mb-6 relative">
                    <a className="flex items-center" href="">
                        <Image className="w-6 h-6 mr-2 rounded-md" src="/it.jpg" alt="it" height="20" width="30" />
                        <span>IT</span>
                        <span className="absolute right-0 font-bold rounded-sm text-xs bg-red-600 p-1 px-2">32+</span>
                    </a>
                </li>
                <li className="mb-6">
                    <a className="flex items-center" href="">
                        <Image className="w-6 h-6 mr-2 rounded-md" src="/music.jpg" alt="music" height="20" width="30" />
                        <span>Music</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
}