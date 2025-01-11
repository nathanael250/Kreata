import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faClock } from '@fortawesome/free-solid-svg-icons';
interface PaymentProps{
    darkMode : boolean
}
const Payments:React.FC<PaymentProps> = ({darkMode}) => {
    return (
        <div className={`${darkMode ? 'bg-[#0A1739]' : 'bg-white'} mt-6 rounded-lg shadow-md p-6`}>
                <h3 className="text-xl font-bold">Payment</h3>
                <p className="text-sm text-gray-500 mb-4">
                    Manage your payment methods, subscription status, and history.
                </p>

                {/* Payment Method */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                        <FontAwesomeIcon icon={faCreditCard} className="text-blue-500 text-xl" />
                        <span className="text-sm">Visa **** 1234</span>
                    </div>
                    <button className="text-blue-500 text-sm font-medium hover:underline">
                        Edit
                    </button>
                </div>

                {/* Subscription Info */}
                <div className="mb-4">
                    <h4 className="text-lg font-bold">Subscription Status</h4>
                    <div className="flex items-center gap-4 mt-2">
                        <span
                            className={`text-sm px-2 py-1 rounded-full ${darkMode ? 'bg-green-700 text-green-100' : 'bg-green-100 text-green-700'
                                }`}
                        >
                            Active
                        </span>
                        <FontAwesomeIcon icon={faClock} className="text-gray-500" />
                        <span className="text-sm text-gray-500">15 days remaining</span>
                    </div>
                </div>

                {/* Payment History */}
                <div>
                    <h4 className="text-lg font-bold">Payment History</h4>
                    <ul className="mt-4 space-y-2">
                        <li className="flex justify-between text-sm">
                            <span>12/01/2024</span>
                            <span>$25.00</span>
                            <span>Visa</span>
                        </li>
                        <li className="flex justify-between text-sm">
                            <span>11/01/2024</span>
                            <span>$25.00</span>
                            <span>Visa</span>
                        </li>
                        <li className="flex justify-between text-sm">
                            <span>10/01/2024</span>
                            <span>$25.00</span>
                            <span>Visa</span>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default Payments
