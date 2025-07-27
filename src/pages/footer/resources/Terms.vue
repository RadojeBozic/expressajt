<template>
  <section>
    <!-- ✨ Pozadinska animacija -->
    <div class="absolute inset-0 -z-10">
      <Particles class="absolute inset-0" />
      <div class="absolute left-1/2 -translate-x-1/2 bottom-0">
        <img src="../../../images/glow-top.svg" class="max-w-none" width="2146" height="774" alt="Glow background" />
      </div>
    </div>

    <div class="relative max-w-6xl mx-auto">
      <Header />

      <div class="pt-32 pb-16 md:pt-52 md:pb-32">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-3xl font-bold mb-6 text-center">📜 Uslovi korišćenja</h1>
          <p class="text-slate-400 text-center mb-12">
            Molimo vas da pažljivo pročitate sledeće uslove pre korišćenja Agencije Express Sajt. Korišćenjem naših usluga prihvatate sve navedene odredbe.
          </p>

          <div class="space-y-8 text-slate-300 text-sm leading-relaxed">
            <div>
              <h2 class="text-lg font-semibold text-purple-400 mb-2">1. Opšti uslovi</h2>
              <p>
                 Agencija Express Sajt omogućava izradu sajtova, online prodavnica i poslovnih alata. Usluge mogu koristiti fizička i pravna lica koja su prihvatila naše uslove korišćenja.
              </p>
            </div>

            <div>
              <h2 class="text-lg font-semibold text-purple-400 mb-2">2. Prava i obaveze korisnika</h2>
              <p>
                Korisnik je odgovoran za tačnost i bezbednost podataka koje unosi. Zabranjeno je korišćenje platforme u svrhe koje su protivne zakonima Republike Srbije i drugih zemalja u kojima se GBS platforma koristi.
              </p>
            </div>

            <div>
              <h2 class="text-lg font-semibold text-purple-400 mb-2">3. Intelektualna svojina</h2>
              <p>
                Svi sadržaji, uključujući softver, dizajn i tekstove su vlasništvo  Agencije Express Sajt, osim ako nije drugačije naznačeno. Zabranjena je neovlašćena upotreba bez pismene dozvole.
              </p>
            </div>

            <div>
              <h2 class="text-lg font-semibold text-purple-400 mb-2">4. Odricanje od odgovornosti</h2>
              <p>
                Trudimo se da platforma bude dostupna i funkcionalna 24/7, ali ne garantujemo potpunu dostupnost niti preuzimamo odgovornost za eventualne gubitke izazvane prekidima.
              </p>
            </div>

            <div>
              <h2 class="text-lg font-semibold text-purple-400 mb-2">5. Izmene uslova</h2>
              <p>
                Zadržavamo pravo da izmenimo uslove korišćenja u bilo kom trenutku. Korisnici će biti obavešteni putem emaila ili obaveštenja na sajtu.
              </p>
            </div>

            <div>
              <h2 class="text-lg font-semibold text-purple-400 mb-2">6. Kontakt</h2>
              <p>
                Za sva pitanja i nedoumice u vezi sa uslovima korišćenja, kontaktirajte nas putem <router-link to="/contact" class="text-purple-400 underline hover:text-purple-300">kontakt forme</router-link>.
              </p>
            </div>
            <div>
              <h2 class="text-lg font-semibold text-purple-400 mb-2">7. Period važenja</h2>
              <p>
                Ovi uslovi korišćenja stupaju na snagu danom objavljivanja na našem sajtu. Poslednji put su ažurirani jul 2025.
              </p>
            </div>
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
  name: 'TermsPage',
  components: {
    Header,
    Footer,
    Particles
  }
}
</script>
