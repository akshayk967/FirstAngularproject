using System;
using System.Collections.Generic;

namespace Innotym.api.Models
{
    public partial class Transaction
    {
        public int TransactionId { get; set; }
        public int UserId { get; set; }
        public int RefId { get; set; }
        public decimal TransferAmount { get; set; }
        public decimal InitialAmount { get; set; }
        public DateTime Date { get; set; }
        public string TransactionType { get; set; }

        public User Ref { get; set; }
        public User User { get; set; }
    }
}
