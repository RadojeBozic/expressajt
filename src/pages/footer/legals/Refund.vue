<template>
  <section>
    <!-- ✨ Pozadinska animacija -->
    <div class="absolute inset-0 -z-10">
      <Particles class="absolute inset-0" />
      <div class="absolute left-1/2 -translate-x-1/2 bottom-0">
        <img src="../../../images/glow-top.svg" class="max-w-none" width="2146" height="774" alt="Pozadinska animacija" />
      </div>
    </div>

    <div class="relative max-w-6xl mx-auto">
      <Header />

      <div class="pt-32 pb-16 md:pt-52 md:pb-32">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-3xl font-bold mb-6 text-center">💸 Politika refundacije</h1>
          <p class="text-slate-400 text-center mb-12">
            Naš cilj je zadovoljstvo korisnika. Ako imate problem sa plaćenom uslugom, pročitajte pravila u nastavku.
          </p>

          <div class="space-y-6 bg-slate-800 p-6 rounded-lg shadow text-slate-300 text-sm leading-relaxed">
            <p><strong>1. Uslovi za povraćaj:</strong> Refundacija je moguća u roku od 7 dana od dana uplate, ukoliko usluga nije iskorišćena u značajnoj meri.</p>

            <p><strong>2. Nisu dozvoljeni povraćaji:</strong> Za korisnike koji su već aktivirali napredne funkcionalnosti, izvršili eksport, ili koristili više od 30% mogućnosti paketa.</p>

            <p><strong>3. Način zahteva:</strong> Za refundaciju, pošaljite zahtev putem kontakt forme sa jasno naznačenim razlogom i podacima o plaćanju.</p>

            <p><strong>4. Rok za odgovor:</strong> Svi refund zahtevi se razmatraju u roku od 5 radnih dana, a povraćaj se vrši najkasnije u roku od 10 radnih dana od odobrenja.</p>

            <p><strong>5. Kontakt:</strong> Sve zahteve šaljite putem <router-link to="/contact" class="text-purple-400 underline hover:text-purple-300">kontakt stranice</router-link>.</p>
          </div>
        </div>
        <!-- ✨ Pozadina sa particles efektom -->
          <div class="absolute inset-0 -z-10">
            <Particles class="absolute inset-0" />
            <div class="absolute left-1/2 -translate-x-1/2 bottom-0">
              <img src="../../../images/glow-bottom.svg" class="max-w-none" width="546" height="274" alt="Pozadina" />
            </div>
          </div>
      </div>

      <Footer />
    </div>
  </section>
</template>

<script>
import Header from '../../../partials/Header.vue'
import Footer from '../../../partials/Footer.vue'
import Particles from '../../../partials/Particles.vue'

export default {
  name: 'RefundPage',
  components: {
    Header,
    Footer,
    Particles
  }
}
</script>
