using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Innotym.api.Models
{
    public partial class InnoTymContext : DbContext
    {
        public InnoTymContext()
        {
        }

        public InnoTymContext(DbContextOptions<InnoTymContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Transaction> Transaction { get; set; }
        public virtual DbSet<User> User { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {                optionsBuilder.UseSqlServer("Server=AKSHAY;Database=InnoTym;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Transaction>(entity =>
            {
                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.InitialAmount)
                    .HasColumnName("InitialAMount")
                    .HasColumnType("money");

                entity.Property(e => e.TransactionType)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.Property(e => e.TransferAmount).HasColumnType("money");

                entity.HasOne(d => d.Ref)
                    .WithMany(p => p.TransactionRef)
                    .HasForeignKey(d => d.RefId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_refid");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.TransactionUser)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_userid");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Amount).HasColumnType("money");

                entity.Property(e => e.Email).HasMaxLength(256);

                entity.Property(e => e.Name).HasMaxLength(256);
            });
        }
    }
}
