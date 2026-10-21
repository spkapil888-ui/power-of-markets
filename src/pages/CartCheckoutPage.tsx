import React, { useState } from 'react';
import { CartItem, PageType } from '../types';
import { Trash2, ShieldCheck, CheckCircle2, ArrowRight, ExternalLink, Ticket, CreditCard, Lock } from 'lucide-react';

interface CartCheckoutPageProps {
  items: CartItem[];
  onRemoveItem: (courseId: string) => void;
  onClearCart: () => void;
  onNavigate: (page: PageType) => void;
}

export const CartCheckoutPage: React.FC<CartCheckoutPageProps> = ({
  items,
  onRemoveItem,
  onClearCart,
  onNavigate,
}) => {
  const [couponCode, setCouponCode] = useState('POM10');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponMsg, setCouponMsg] = useState<string>('');
  const [billingName, setBillingName] = useState('Ankit Dave');
  const [billingEmail, setBillingEmail] = useState('ankit.dave@example.com');
  const [billingPhone, setBillingPhone] = useState('+91 98200 12345');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  const subtotal = items.reduce((acc, curr) => acc + curr.priceINR, 0);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'POM10') {
      const discount = Math.round(subtotal * 0.1);
      setAppliedDiscount(discount);
      setCouponMsg('Coupon POM10 applied: 10% educational savings!');
    } else {
      setAppliedDiscount(0);
      setCouponMsg('Invalid coupon code. Try POM10.');
    }
  };

  const gst = Math.round((subtotal - appliedDiscount) * 0.18);
  const total = subtotal - appliedDiscount + (subtotal > 0 ? gst : 0);

  const handleCompletePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderId('POM-ORD-' + Math.floor(100000 + Math.random() * 900000));
      setOrderComplete(true);
      onClearCart();
    }, 800);
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#DCEAF8] rounded-full text-xs font-semibold text-[#0767DF] font-mono mb-3">
            Secure Enrollment & Checkout
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#081B3A] tracking-tight">
            Order Review & Enrolment
          </h1>
        </div>

        {!orderComplete ? (
          items.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left Column: Cart Items & Billing (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                
                {/* Cart Items List */}
                <div className="neu-card rounded-2xl p-6 bg-white border border-[#DCEAF8]">
                  <h3 className="font-bold text-[#071F49] text-base mb-4">
                    Selected Programs ({items.length})
                  </h3>

                  <div className="divide-y divide-[#EEF6FF]">
                    {items.map((item) => (
                      <div key={item.courseId} className="py-4 flex items-center justify-between gap-4">
                        <div>
                          <span className="text-[11px] font-mono text-[#0767DF] font-bold">
                            {item.category}
                          </span>
                          <h4 className="text-sm font-bold text-[#071F49] mt-0.5">
                            {item.title}
                          </h4>
                          <span className="text-xs text-[#61748D]">
                            12 Months On-Demand LMS Access
                          </span>
                        </div>

                        <div className="flex items-center gap-4 shrink-0">
                          <span className="font-mono font-bold text-base text-[#071F49]">
                            ₹{item.priceINR.toLocaleString('en-IN')}
                          </span>
                          <button
                            onClick={() => onRemoveItem(item.courseId)}
                            className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg transition-colors cursor-pointer"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Billing Details Form */}
                <div className="neu-card rounded-2xl p-6 bg-white border border-[#DCEAF8]">
                  <h3 className="font-bold text-[#071F49] text-base mb-4">
                    Learner Billing Information
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#071F49] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={billingName}
                        onChange={(e) => setBillingName(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#EEF6FF]/60 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#071F49] mb-1">
                          Email (For LMS Access) *
                        </label>
                        <input
                          type="email"
                          required
                          value={billingEmail}
                          onChange={(e) => setBillingEmail(e.target.value)}
                          className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#EEF6FF]/60 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#071F49] mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={billingPhone}
                          onChange={(e) => setBillingPhone(e.target.value)}
                          className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#EEF6FF]/60 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Gateway Options */}
                <div className="neu-card rounded-2xl p-6 bg-white border border-[#DCEAF8]">
                  <h3 className="font-bold text-[#071F49] text-base mb-4">
                    Payment Gateway
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('upi')}
                      className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                        paymentMethod === 'upi'
                          ? 'border-[#0767DF] bg-[#EEF6FF] text-[#071F49] font-bold shadow-xs'
                          : 'border-[#DCEAF8] text-[#61748D] hover:bg-[#EEF6FF]/30'
                      }`}
                    >
                      <div className="font-mono font-bold">UPI / QR</div>
                      <div className="text-[10px] text-[#61748D] mt-0.5">GPay, PhonePe, Paytm</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                        paymentMethod === 'card'
                          ? 'border-[#0767DF] bg-[#EEF6FF] text-[#071F49] font-bold shadow-xs'
                          : 'border-[#DCEAF8] text-[#61748D] hover:bg-[#EEF6FF]/30'
                      }`}
                    >
                      <div className="font-mono font-bold">Card / NetBanking</div>
                      <div className="text-[10px] text-[#61748D] mt-0.5">Visa, Master, RuPay</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('netbanking')}
                      className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                        paymentMethod === 'netbanking'
                          ? 'border-[#0767DF] bg-[#EEF6FF] text-[#071F49] font-bold shadow-xs'
                          : 'border-[#DCEAF8] text-[#61748D] hover:bg-[#EEF6FF]/30'
                      }`}
                    >
                      <div className="font-mono font-bold">NetBanking / EMI</div>
                      <div className="text-[10px] text-[#61748D] mt-0.5">All Major Indian Banks</div>
                    </button>
                  </div>
                </div>

              </div>

              {/* Right Column: Order Summary (5 Cols) */}
              <div className="lg:col-span-5">
                <div className="sticky top-24 neu-card rounded-2xl p-6 sm:p-7 bg-white border border-[#DCEAF8] flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-[#071F49] text-base mb-4">
                      Order Summary
                    </h3>

                    {/* Coupon Input */}
                    <form onSubmit={handleApplyCoupon} className="flex gap-2 mb-4">
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Coupon code (e.g. POM10)"
                        className="flex-1 px-3 py-2 text-xs font-mono uppercase bg-[#EEF6FF]/60 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF]"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-[#EEF6FF] hover:bg-[#DCEAF8] text-[#0767DF] font-semibold text-xs rounded-xl cursor-pointer"
                      >
                        Apply
                      </button>
                    </form>

                    {couponMsg && (
                      <div className="text-[11px] font-mono text-[#159B72] mb-4">
                        {couponMsg}
                      </div>
                    )}

                    {/* Cost Breakdown */}
                    <div className="space-y-2.5 pt-3 border-t border-[#DCEAF8] text-xs">
                      <div className="flex items-center justify-between text-[#61748D]">
                        <span>Subtotal</span>
                        <span className="font-mono text-[#071F49]">₹{subtotal.toLocaleString('en-IN')}</span>
                      </div>

                      {appliedDiscount > 0 && (
                        <div className="flex items-center justify-between text-[#159B72]">
                          <span>Discount (POM10 - 10%)</span>
                          <span className="font-mono">-₹{appliedDiscount.toLocaleString('en-IN')}</span>
                        </div>
                      )}

                      <div className="flex items-center justify-between text-[#61748D]">
                        <span>GST (18% Educational Tax)</span>
                        <span className="font-mono text-[#071F49]">₹{gst.toLocaleString('en-IN')}</span>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-[#DCEAF8] text-base font-extrabold text-[#071F49]">
                        <span>Total Payable</span>
                        <span className="font-mono text-xl text-[#0767DF]">
                          ₹{total.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#DCEAF8] space-y-3">
                    <button
                      onClick={handleCompletePayment}
                      disabled={isProcessing}
                      className="w-full py-3.5 px-4 text-xs sm:text-sm font-semibold text-white bg-[#0767DF] hover:bg-[#0654b7] active:bg-[#071F49] rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Lock className="w-4 h-4" />
                      <span>{isProcessing ? 'Processing Securely...' : `Pay ₹${total.toLocaleString('en-IN')} & Enroll`}</span>
                    </button>

                    <div className="text-[11px] text-[#61748D] text-center flex items-center justify-center gap-1.5 pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#159B72]" />
                      <span>256-bit Bank Grade Security · Instant LMS Activation</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            <div className="text-center py-16 neu-card rounded-3xl p-8 bg-white border border-[#DCEAF8]">
              <Ticket className="w-12 h-12 text-[#61748D] mx-auto mb-3 opacity-60" />
              <h3 className="text-xl font-bold text-[#071F49]">Your Cart is Currently Empty</h3>
              <p className="text-xs sm:text-sm text-[#61748D] mt-1 mb-6 max-w-sm mx-auto">
                Explore our Option Greeks and Price Action curriculums to begin your learning journey.
              </p>
              <button
                onClick={() => onNavigate('courses')}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-[#0767DF] hover:bg-[#0654b7] rounded-xl cursor-pointer"
              >
                Browse Curriculums
              </button>
            </div>
          )
        ) : (
          <div className="neu-card rounded-3xl p-8 sm:p-12 bg-white border border-[#DCEAF8] max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-[#159B72]/15 text-[#159B72] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="text-xs font-mono font-bold text-[#159B72] uppercase tracking-wider mb-1">
              Payment Successful & Verified
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071F49] mb-2">
              Welcome to Power of Markets!
            </h2>
            <p className="text-xs sm:text-sm text-[#61748D] leading-relaxed mb-6">
              Order Reference: <strong className="text-[#071F49] font-mono">{orderId}</strong>. Your LMS credentials and course access link have been dispatched to <strong>{billingEmail}</strong>.
            </p>

            <div className="p-4 rounded-xl bg-[#EEF6FF] border border-[#DCEAF8] text-xs text-left mb-6 space-y-1 font-mono text-[#071F49]">
              <div>Learner: {billingName}</div>
              <div>Invoice Date: {new Date().toLocaleDateString()}</div>
              <div>Amount Paid: ₹{total.toLocaleString('en-IN')} (Inclusive of 18% GST)</div>
              <div>Status: Instant Activation Confirmed</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onNavigate('dashboard')}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-[#0767DF] hover:bg-[#0654b7] rounded-xl cursor-pointer"
              >
                Go to Student Dashboard
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-[#071F49] bg-[#EEF6FF] hover:bg-[#DCEAF8] rounded-xl cursor-pointer"
              >
                Return Home
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
