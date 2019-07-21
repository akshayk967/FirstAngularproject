using System;
using System.Collections.Generic;

namespace Innotym.api.Models
{
    public partial class User
    {
        public User()
        {
            TransactionRef = new HashSet<Transaction>();
            TransactionUser = new HashSet<Transaction>();
        }

        public int UserId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public decimal? Amount { get; set; }
        public bool? IsActive { get; set; }

        public ICollection<Transaction> TransactionRef { get; set; }
        public ICollection<Transaction> TransactionUser { get; set; }
    }
}
