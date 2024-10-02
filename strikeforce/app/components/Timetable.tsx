import React from 'react'
import Image from "next/image";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

const Timetable = () => {
  return (
    <div className='max-w-7xl'>
        <div className='flex justify-center items-center w-full border-b-2 py-2 border-gray-400'>
            <h1 className='font-bold font-mono text-4xl md:text-6xl text-nowrap'>TIME</h1>
            <div>
                <Image src="/assets/logo.png" height={45} width={45} alt="logo"/>
            </div>
            <h1 className='font-bold font-mono text-4xl md:text-6xl text-nowrap'>TABLE</h1>
        </div>

        <div className='mt-5 md:mt-8'>
        <Table>
        <TableCaption><p className='font-bold text-black text-xl'>Membership: $30p/w, No sign up fees!</p></TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-center font-extrabold text-zinc-300 bg-red-800"></TableHead>
                    <TableHead className="text-center font-extrabold text-zinc-300 bg-red-800">Monday</TableHead>
                    <TableHead className="text-center font-extrabold text-zinc-300 bg-red-800">Tuesday</TableHead>
                    <TableHead className="text-center font-extrabold text-zinc-300 bg-red-800">Wednesday</TableHead>
                    <TableHead className="text-center font-extrabold text-zinc-300 bg-red-800">Thursday</TableHead>
                    <TableHead className="text-center font-extrabold text-zinc-300 bg-red-800">Friday</TableHead>
                    <TableHead className="text-center font-extrabold text-zinc-300 bg-red-800">Saturday</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
            <TableRow>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-red-800">10AM</TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black"></TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black"></TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black"></TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black"></TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black"></TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black">Open Sparring</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-red-800">5PM</TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black"></TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black">Kids Class</TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black">Kids Class</TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black">Kids Class</TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black"></TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black"></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-red-800">6PM</TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black">Fighter Class</TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black">Fighters Sparring</TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black">Fighters Class</TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black">Fighters Sparring</TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black">Fighters Class</TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black"></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-red-800">7PM</TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black">Beginners Class</TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black"></TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black">Beginners Class</TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black"></TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black">Beginners Class</TableCell>
                    <TableCell className="text-center font-extrabold text-zinc-300 bg-black"></TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </div>
    </div>
  )
}

export default Timetable