'use client'
import React, { useState } from 'react'
import menu from '@/assets/menu.svg'
import logo from '@/assets/logo.svg'
import Link from 'next/link'

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    const handleClickNone = () => {
        if (openMenu) {
            setOpenMenu(false);
        }
    };

    return (
        <div className='bg-gray-100 py-2 px-3 md:px-10'>
            {/* MOBILE */}
            <div className='flex md:hidden items-center gap-2 justify-between'>
                <div className="dropdown">
                    <button onClick={handleOpenMenu} tabIndex={0} className='btn btn-square btn-ghost'>
                        <img  src={menu.src} alt="" />
                    </button>
                    {openMenu &&
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 gap-1">
                            <li>
                                <Link onClick={handleClickNone} className='text-bold text-lg' href="/">Inventario</Link>
                            </li>
                            <li>
                                <Link onClick={handleClickNone} className='text-bold text-lg' href="/entrada">Entradas</Link>
                            </li>
                            <li>
                                <Link onClick={handleClickNone} className='text-bold text-lg' href="/salida">Salidas</Link>
                            </li>
                        </ul>
                    }
                </div>

                <div>
                    <Link className='text-bold text-xl' href="/">
                        <div className='flex items-center gap-3'>
                            <img width={45} height={45} src={logo.src} alt="" />
                            <p>Stock Control</p>
                        </div>
                    </Link>
                </div>
            </div>

            {/* DESKTOP */}
            <div className=' hidden md:flex items-center gap-2 justify-between'>
                <div>
                    <Link className='text-bold text-xl' href="/">
                        <div className='flex items-center gap-3'>
                            <img width={45} height={45} src={logo.src} alt="" />
                            <p>Stock Control</p>
                        </div>
                    </Link>
                </div>

                <div className='flex items-center gap-6'>
                    <Link className='text-bold text-lg hover:underline' href="/">Inventario</Link>
                    <Link className='text-bold text-lg hover:underline' href="/entrada">Entradas</Link>
                    <Link className='text-bold text-lg hover:underline ' href="/salida">Salidas</Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar