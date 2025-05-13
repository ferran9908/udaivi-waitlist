import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const notion = new Client({ auth: process.env.NOTION_SECRET });
    const response = await notion.pages.create({
      parent: {
        database_id: `${process.env.NOTION_DB}`,
      },
      properties: {
        Email: {
          type: "email",
          email: body?.email,
        },
        Name: {
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: body?.name,
              },
            },
          ],
        },
        'Signup Date': {
          type: 'date',
          date: {
            start: new Date().toLocaleDateString('en-CA', { timeZone: 'America/Los_Angeles' }),
          },
        },
      },
    });

    if (!response) {
      throw new Error("Failed to add email to Notion");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

// https://www.notion.so/zekeso/1f2ed4e6cffa800fa5fcc5285cbed0c3?v=1f2ed4e6cffa809eb915000cc802bc98&pvs=4
