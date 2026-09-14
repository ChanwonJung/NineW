import type {Metadata} from "next";
import AdminInbox from "@/components/AdminInbox";
export const metadata:Metadata={title:"상담 관리",robots:{index:false,follow:false}};
export default function AdminPage(){return <AdminInbox/>;}
