import { Transaction, TransactionType } from "@prisma/client";
import { Badge, CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction
}

const TransactionTypeBadge = ({transaction}: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-green hover:bg-green font-bold text-primary">
        <CircleIcon className="mr-2 fill-primary" size={10} />
        Depósito
      </Badge>
    );
  }

  if (transaction.type === TransactionType.INVESTMENT) {
    return (
      <Badge className="hover:bg-white-opacity-10 bg-white bg-opacity-10 font-bold text-white">
        <CircleIcon className="mr-2 fill-white" size={10} />
        Investimento
      </Badge>
    );
  }

  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-danger text-danger hover:bg-danger-opacity-10 bg-opacity-10 font-bold">
        <CircleIcon className="fill-danger mr-2" size={10} />
        Despesa
      </Badge>
    );
  }
}
 
export default TransactionTypeBadge;