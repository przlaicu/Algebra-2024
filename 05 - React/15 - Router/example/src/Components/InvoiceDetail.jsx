import { useSearchParams } from "react-router-dom";

export default function InvoiceDetail() {
    
    const [searchParams, setSearchParams] = useSearchParams();

    // Params
    const invoiceId = searchParams.get('id');
    const due = searchParams.get('due');
    const amount = searchParams.get('amount');
    const status = searchParams.get('status');

    const date = new Date(due);

    // http://localhost:3000/invoice/detail?id=2873812687&due=2024-01-05%status=paied&amount=1099.99

    return(
        <div>
            <h1>InvoiceDetail.</h1>
            <p>Your invoice #{invoiceId} amount to {amount} USD with a due date of {' '} {date.toLocaleDateString('hr-HR')}. is {status} </p>
        </div>
    );
}