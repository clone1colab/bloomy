/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Cake, Cookie, Coffee, Instagram, Facebook, Mail, MapPin, Phone, Heart, ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-bakery-pink selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bakery-bg/80 backdrop-blur-md border-b border-bakery-border">
        <div className="max-w-7xl mx-auto px-12 h-24 flex items-center justify-between">
          <div className="flex flex-col items-center leading-tight select-none">
            <span className="text-3xl font-black tracking-[0.2em] text-bakery-text">BLOOMY</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-bakery-text-soft -mt-1">BAKERY</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-xs font-medium uppercase tracking-[0.2em] text-bakery-text">
            <a href="#" className="border-b border-bakery-text pb-1 transition-all">Trang chủ</a>
            <a href="#about" className="opacity-60 hover:opacity-100 transition-all">Giới thiệu</a>
            <a href="#contact" className="opacity-60 hover:opacity-100 transition-all">Liên hệ</a>
          </div>

          <button 
            className="md:hidden text-bakery-text"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-bakery-bg border-b border-bakery-border p-6 shadow-xl"
          >
            <div className="flex flex-col gap-4 text-sm font-semibold text-bakery-text uppercase tracking-widest">
              <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-bakery-pink">Trang chủ</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-bakery-pink">Giới thiệu</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-bakery-pink">Liên hệ</a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6"
          >
            <div className="inline-block px-4 py-1 bg-white/40 text-[10px] uppercase tracking-widest w-fit rounded-full font-sans font-bold">
              Handmade with Love
            </div>
            <h2 className="text-5xl md:text-7xl leading-[1.1] italic text-bakery-text">
              Bakery Bloomy – <br />
              <span className="font-black not-italic text-bakery-pink">Ngọt ngào</span> từ ánh nhìn
            </h2>
            <p className="font-sans text-sm md:text-base leading-relaxed text-bakery-text/80 max-w-lg">
              Nơi lưu giữ hương vị ngọt ngào từ những chiếc bánh handmade được chăm chút tỉ mỉ, mang lại cảm giác ấm áp và dịu dàng tại Bakery Bloomy.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <a href="#about" className="px-8 py-3 bg-bakery-pink hover:bg-bakery-pink-dark text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all transform hover:-translate-y-1 shadow-lg shadow-bakery-pink/20 inline-flex items-center">
                Tìm hiểu thêm
              </a>
              <a href="#about" className="px-8 py-3 bg-white/20 border border-bakery-border text-bakery-text rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white/40 transition-all inline-flex items-center">
                Về chúng tôi
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-12 xl:col-span-7 flex flex-col justify-center"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/30">
              <img 
                src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?q=80&w=2000&auto=format&fit=crop" 
                alt="Bakery Hero"
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bakery-text/10 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories / Stats */}
      <section className="bg-white/50 py-12 border-y border-bakery-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group cursor-default">
            <Cake className="mx-auto mb-4 text-bakery-pink group-hover:scale-110 transition-transform" size={32} />
            <h4 className="font-bold text-xl">50+</h4>
            <p className="text-xs uppercase tracking-widest text-bakery-text/50">Mẫu bánh</p>
          </div>
          <div className="text-center group cursor-default">
            <Cookie className="mx-auto mb-4 text-bakery-pink group-hover:scale-110 transition-transform" size={32} />
            <h4 className="font-bold text-xl">100%</h4>
            <p className="text-xs uppercase tracking-widest text-bakery-text/50">Handmade</p>
          </div>
          <div className="text-center group cursor-default">
            <Coffee className="mx-auto mb-4 text-bakery-pink group-hover:scale-110 transition-transform" size={32} />
            <h4 className="font-bold text-xl">Fresh</h4>
            <p className="text-xs uppercase tracking-widest text-bakery-text/50">Mỗi ngày</p>
          </div>
          <div className="text-center group cursor-default">
            <Heart className="mx-auto mb-4 text-bakery-pink group-hover:scale-110 transition-transform" size={32} />
            <h4 className="font-bold text-xl">Love</h4>
            <p className="text-xs uppercase tracking-widest text-bakery-text/50">Tâm huyết</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-bakery-bg py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 relative">
            <h2 className="text-4xl md:text-5xl font-display text-bakery-text">Câu Chuyện Của Chúng Tôi</h2>
            <p className="text-bakery-text/70 leading-relaxed">
              Bắt đầu từ tình yêu mãnh liệt với bánh ngọt và màu hồng pastel, Bakery Bloomy không chỉ là một tiệm bánh, 
              mà là nơi chúng tôi gửi gắm những niềm vui nhỏ bé qua từng mẻ bánh nướng mỗi sáng.
            </p>
            <p className="text-bakery-text/70 leading-relaxed">
              Chúng tôi tin rằng, một chiếc bánh ngon có thể làm bừng sáng cả một ngày dài. 
              Màu hồng pastel không chỉ là sắc màu, nó là cảm giác yên bình, nhẹ nhàng và nữ tính mà chúng tôi muốn lan tỏa.
            </p>
            <ul className="space-y-3">
              {['Nguyên liệu tự nhiên', 'Không chất bảo quản', 'Đang nướng mỗi ngày', 'Tùy chỉnh theo ý bạn'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-bakery-pink-dark">
                  <div className="w-2 h-2 rounded-full bg-bakery-pink"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.div initial={{ y: 20 }} whileInView={{ y: 0 }} transition={{ duration: 0.8 }} className="space-y-4">
              <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop" alt="Bakery life 1" className="rounded-3xl shadow-lg w-full h-64 object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop" alt="Bakery life 2" className="rounded-3xl shadow-lg w-full h-48 object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          <motion.div initial={{ y: -20 }} whileInView={{ y: 0 }} transition={{ duration: 0.8 }} className="space-y-4 pt-8">
            <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop" alt="Bakery life 4" className="rounded-3xl shadow-lg w-full h-64 object-cover" referrerPolicy="no-referrer" />
          </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-16 border border-bakery-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-bakery-bg rounded-bl-full opacity-50"></div>
            
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display text-bakery-text mb-4">Gửi Lời Nhắn Cho Chúng Tôi</h2>
              <p className="text-bakery-text/60 uppercase tracking-widest text-xs font-bold">Hãy để lại thông tin, chúng tôi sẽ phản hồi sớm nhất!</p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-bakery-text/70 ml-2">Tên của bạn</label>
                  <input 
                    type="text" 
                    placeholder="Nguyễn Văn A"
                    className="w-full px-6 py-4 rounded-2xl bg-bakery-bg/30 border border-bakery-border focus:outline-none focus:ring-2 focus:ring-bakery-pink/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-bakery-text/70 ml-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="example@gmail.com"
                    className="w-full px-6 py-4 rounded-2xl bg-bakery-bg/30 border border-bakery-border focus:outline-none focus:ring-2 focus:ring-bakery-pink/50 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-bakery-text/70 ml-2">Lời nhắn</label>
                <textarea 
                  rows={4}
                  placeholder="Bạn muốn đặt bánh hay đóng góp ý kiến cho tiệm..."
                  className="w-full px-6 py-4 rounded-2xl bg-bakery-bg/30 border border-bakery-border focus:outline-none focus:ring-2 focus:ring-bakery-pink/50 transition-all"
                ></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-bakery-text text-white rounded-2xl font-bold hover:bg-bakery-text/90 transition-all transform hover:-translate-y-1 shadow-lg">
                Gửi ngay
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-12 py-10 bg-white/20 border-t border-bakery-border flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-bakery-text/60">
        <div>&copy; {new Date().getFullYear()} Bakery Bloomy. All Rights Reserved.</div>
        <div className="flex gap-8 italic normal-case font-serif font-normal">
          <span>Facebook: /bakerybloomy</span>
          <span>Instagram: @bakerybloomy</span>
        </div>
        <div className="font-black tracking-[0.5em] text-bakery-text">BAKERY BLOOMY</div>
      </footer>
    </div>
  );
}

