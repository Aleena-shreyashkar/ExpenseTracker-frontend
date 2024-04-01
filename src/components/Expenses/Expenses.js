import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layout";
import { useGlobalContext } from "../../context/globalContext";
import ExpenseForm from "./ExpenseForm";
import IncomeItem from "../incomeItem/incomeItem";

function Expense() {
    const { addExpense, expenses, getExpenses, deleteExpense, totalExpense } =
        useGlobalContext();

    useEffect(() => {
        getExpenses();
    }, []);

    return (
        <ExpenseStyled>
            <InnerLayout>
                <h1>Expense</h1>
                <h2 className="total-Expense">
                    Total Expense: <span>${totalExpense()}</span>
                </h2>
                <div className="Expense-content">
                    <div className="form-container">
                        <ExpenseForm />
                    </div>
                    <div className="Expenses">
                        {expenses.map((Expense) => {
                            const {
                                _id,
                                title,
                                amount,
                                date,
                                category,
                                description,
                                type,
                            } = Expense;
                            return (
                                <IncomeItem
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    description={description}
                                    amount={amount}
                                    date={date}
                                    type={type}
                                    category={category}
                                    indicatorColor="var(--color-green)"
                                    deleteItem={deleteExpense}
                                />
                            );
                        })}
                    </div>
                </div>
            </InnerLayout>
        </ExpenseStyled>
    );
}

const ExpenseStyled = styled.div`
display:flex,
display: flex;
    overflow: auto;
    .total-Expense{
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
        span{
            font-size: 2rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .Expense-content{
        display: flex;
        gap: 2rem;
        .Expenses{
            flex: 1;
        }
    }
    
`;

export default Expense;
