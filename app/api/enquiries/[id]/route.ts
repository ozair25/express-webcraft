import { NextRequest, NextResponse } from "next/server";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import { verifyAdminToken } from "@/lib/services/auth";

// Helper to get database and check authorization
async function checkAuthAndGetDoc(req: NextRequest, id: string) {
  const authHeader = req.headers.get("Authorization");
  const isAdmin = await verifyAdminToken(authHeader);

  if (!isAdmin) {
    return { errorResponse: NextResponse.json({ error: "Unauthorized access." }, { status: 401 }) };
  }

  const docRef = doc(db, "enquiries", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return { errorResponse: NextResponse.json({ error: "Enquiry not found." }, { status: 404 }) };
  }

  return { docRef, docSnap };
}

// PATCH /api/enquiries/[id] - Update enquiry status
export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const { docRef, errorResponse } = await checkAuthAndGetDoc(req, id);
    if (errorResponse) return errorResponse;

    const body = await req.json();
    const { status } = body;

    const allowedStatuses = ["New", "Contacted", "Closed"];
    if (!status || !allowedStatuses.includes(status)) {
      return NextResponse.json(
        { error: "Invalid status. Allowed: New, Contacted, Closed." },
        { status: 400 }
      );
    }

    // Update the document in Firestore
    await updateDoc(docRef, { status });

    return NextResponse.json({
      success: true,
      message: `Enquiry status updated to ${status}.`,
    });
  } catch (error: any) {
    console.error("Error updating enquiry:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

// DELETE /api/enquiries/[id] - Delete enquiry
export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const { docRef, errorResponse } = await checkAuthAndGetDoc(req, id);
    if (errorResponse) return errorResponse;

    // Delete the document in Firestore
    await deleteDoc(docRef);

    return NextResponse.json({
      success: true,
      message: "Enquiry deleted successfully.",
    });
  } catch (error: any) {
    console.error("Error deleting enquiry:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
