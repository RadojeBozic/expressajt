<template>
  <section>
    <!-- 🎇 Pozadina sa particles i glow -->
    <div class="absolute inset-0 -z-10">
      <Particles class="absolute inset-0" />
      <div class="absolute left-1/2 -translate-x-1/2 bottom-0">
        <img src="../../../images/glow-top.svg" class="max-w-none" width="2146" height="774" alt="Glow background" />
      </div>
    </div>

    <!-- ✅ Sadržaj -->
    <div class="relative max-w-6xl mx-auto">
      <Header />

      <div class="pt-32 pb-16 md:pt-52 md:pb-32">
        <div class="max-w-5xl mx-auto">
          <h1 class="text-3xl font-bold mb-6 text-center">🔗 Integracije sistema</h1>
          <p class="text-slate-400 text-center mb-12">
            Naša platforma omogućava povezivanje sa najvažnijim servisima kako bi tvoje poslovanje bilo funkcionalnije, brže i sigurnije.
          </p>

          <ul class="space-y-6">

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Stripe</h2>
              <p class="text-slate-300 text-sm mt-1">Online naplata direktno sa sajta – sigurno plaćanje karticama sa integrisanim sigurnosnim mehanizmima (3D Secure, PCI-DSS).</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Mailchimp</h2>
              <p class="text-slate-300 text-sm mt-1">Prikupljanje email adresa i slanje newsletter kampanja. Savršeno za promociju i informisanje korisnika.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Google Maps</h2>
              <p class="text-slate-300 text-sm mt-1">Lokacija firme direktno na sajtu – sa prikazom u okviru kontakt forme ili zasebne sekcije.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">YouTube</h2>
              <p class="text-slate-300 text-sm mt-1">Ugrađivanje video sadržaja – prezentacije, tutorijali ili reklame. Video se prikazuje direktno u sekciji sajta.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Facebook & Instagram</h2>
              <p class="text-slate-300 text-sm mt-1">Integracija sa društvenim mrežama, prikaz objava, automatsko deljenje i povezivanje sa poslovnom stranicom.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Google Analytics & Tag Manager</h2>
              <p class="text-slate-300 text-sm mt-1">Detaljna analitika poseta, praćenje konverzija, A/B testiranja i optimizacija marketinških kampanja.</p>
            </li>

          </ul>
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
  name: 'FooterIntegrations',
  components: {
    Header,
    Footer,
    Particles
  }
}
</script>
