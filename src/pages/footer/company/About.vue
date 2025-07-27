<template>
  <section>
    <!-- ✨ Pozadinska animacija -->
    <div class="absolute inset-0 -z-10">
      <Particles class="absolute inset-0" />
      <div class="absolute left-1/2 -translate-x-1/2 bottom-0">
        <img src="../../../images/glow-top.svg" class="max-w-none" width="2146" height="774" alt="Glow background" />
      </div>
    </div>

    <!-- 📦 Glavni sadržaj -->
    <div class="relative max-w-6xl mx-auto">
      <Header />

      <div class="pt-32 pb-16 md:pt-52 md:pb-32">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-3xl font-bold mb-6 text-center">🏢 O nama</h1>
          <p class="text-slate-400 text-center mb-12">
            Express Sajt je agencijska inicijativa u okviru GBS platforme, posvećena brzom, modernom i dostupnom nastupu na internetu za male i srednje firme.
          </p>

          <div class="space-y-6 text-slate-300 text-sm leading-relaxed">
            <p>
              GBS (Globalni Biznis Sistem) je tehnološka platforma koja objedinjuje više nezavisnih servisa i aplikacija pod jednim modularnim kišobranom. Agencija Express Sajt je osmišljena kao početna tačka – praktičan alat za brzu izradu web prisustva.
            </p>
            <p>
              Express paketi omogućavaju korisnicima da već za 10 minuta dobiju osnovnu prezentaciju, za par sati PRO varijantu, a u narednim fazama i punokrvne e-commerce ili poslovne aplikacije.
            </p>
            <p>
              Naš tim kombinuje iskustvo u programiranju (Laravel, Vue, Tailwind), dizajnu, UI/UX praksama, kao i razvoju poslovnih procesa i prodajnih sistema. Rešenja su domaća – razvijena u Srbiji, uz razumevanje lokalnog tržišta.
            </p>
            <p>
              Platforma je skalabilna: korisnik može početi sa besplatnim sajtom, a kasnije nadograđivati sopstveno rešenje – bez potrebe za migracijom ili novim sistemom. Sve je već spremno – samo se otključavaju dodatni moduli po potrebi.
            </p>
            <p>
              Express Sajt nije kraj – on je ulazna tačka. Kroz GBS platformu razvijamo nove usluge: ERP, CRM, marketplace, aplikacije za knjigovodstvo, edukaciju, turističke agencije i druge domene.
            </p>
            <p>
              Naš cilj je da digitalna transformacija ne bude skupa, komplikovana i rezervisana za velike igrače – već dostupna svakome, odmah i po meri.
            </p>
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
  name: 'AboutPage',
  components: {
    Header,
    Footer,
    Particles
  }
}
</script>
