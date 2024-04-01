import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { dateFormat } from "../../utils/dateFormat";

function Transaction() {
    const { allTransactions } = useGlobalContext();
    const [...transactions] = allTransactions();
    return (
        <TransactionStyled>
            <h2 className="trans-item">All Transactions</h2>
            {transactions.map((item) => {
                const { _id, title, amount, type } = item;
                return (
                    <div key={_id} className="trans-item">
                        <p
                            style={{
                                color:
                                    type === "expense"
                                        ? "red"
                                        : "var(--color-green)",
                            }}
                        >
                            {title}
                        </p>
                        <p
                            style={{
                                color:
                                    type === "expense"
                                        ? "red"
                                        : "var(--color-green)",
                            }}
                        >
                            {type === "expense"
                                ? `-${amount <= 0 ? 0 : amount}`
                                : `+${amount <= 0 ? 0 : amount}`}
                        </p>
                    </div>
                );
            })}
        </TransactionStyled>
    );
}

const TransactionStyled = styled.div`
display:flex,
display: flex;
    overflow: auto;
    .trans-item{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
    }
`;

export default Transaction;
