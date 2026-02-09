import React from 'react'
import "./footer.css";

export default function Footer() {
    return (
        <div>
            <footer className='footer'>
                <div className='footer-top'>

                    <div className='footer-col'>
                        <h4>Shein</h4>
                        <p>About Shein</p>
                        <p>Terms & Conditions</p>
                        <p>We Respect Your Policy</p>
                        <p>Fees & Payments</p>
                        <p>Returns & Refunds Policy</p>
                        <p>Promotion Terms & Conditions</p>
                    </div>

                    <div className='footer-col'>
                        <h4>Help</h4>
                        <p>Track your Order</p>
                        <p>Frequently Asked Questions</p>
                        <p>Returns</p>
                        <p>Cancellations</p>
                        <p>Payments</p>
                        <p>Customer Care</p>
                    </div>

                    <div className='footer-col'>
                        <h4>Shop by</h4>
                        <p>Women</p>
                        <p>Men</p>
                        <p>Shop Trending</p>
                    </div>
                </div>

                <div className='footer-bottom'>
                    <div className="payments">
                        <h4>Payment Methods</h4>
                        <div className="payments-icons">
                            <img src="/icons/cash-on-delivery.png" alt="delivery" />
                            <img src="/icons/JioMoney.webp" alt="Jio Money" />
                            <img src="/icons/card.png" alt="mastercard" />
                            <img src="/icons/net banking.webp" alt="net banking" />
                            <img src="/icons/visa.png" alt="Verified by Visa" />
                        </div>
                    </div>

                    <div className='secure'>
                        <img src="/icons/cyber-security.png" alt="secure" />
                    </div>
                </div>
            </footer>
        </div>
    )
}
