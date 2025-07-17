import { NextRequest, NextResponse } from "next/server";

import { IMessage, message } from "../model/model";
import { connectDB } from "@/app/lib/db";
await connectDB();
interface ContactType {
  name: string;
  contact: string;
  message: string;
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const {name,contact,message:msg} = body;
    console.log(name + " "+ contact + " "+ msg + "baba");
    let d:IMessage|null = null;
    
    if ((!name || !contact || !msg)|| name.trim()=="" || contact.trim()=="" ) {
        return NextResponse.json({ status: false, message: "invalid data" }, { status: 400 })
    }
    try {
        //@ts-ignore
         d = await message.create({ name: name, contact: contact, message: msg });
        console.log(d);
    }
    catch (e) {
        const ms = e instanceof Error ? e.message : "Error Occured";
        return NextResponse.json({ status: false, message: ms }, { status: 500 })
    }

    return NextResponse.json({ stasus: true, message: d }, { status: 200 })
}