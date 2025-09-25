import { NextResponse } from "next/server";
import workersData from "../../../../workers.json";

export async function GET() {
  try {
    return NextResponse.json(workersData);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to load workers data" },
      { status: 500 }
    );
  }
}