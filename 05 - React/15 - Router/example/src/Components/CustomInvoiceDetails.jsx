import { useParams } from "react-router-dom";

export default function CustomInvoiceDetails() {
    
    const { invoiceId } = useParams();

    return(
        <div>
            <h1>CustomerInvoiceDetails</h1>
            <h2>Invoice #{invoiceId} Details: ....... </h2>
        </div>
    );
}