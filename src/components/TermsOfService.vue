<template>
  <section
    class="mx-2 overflow-y-auto h-inherit flex flex-col bg-cardColor xl:w-3/4 lg:shadow-xl w-full px-8 py-24 border-gray-100 rounded-lg bg-blue-1300 lg:w-8/12 lg:px-24 lg:py-4 lg:rounded-l-none text-white"
  >
    <div
      @click="$emit('go-back')"
      class="h-4 my-3 cursor-pointer text-purple-400"
    >
      <i class="las la-angle-left"></i>
      Go back
    </div>
    <h2>Terms of Service</h2>
    <p>
      Please read these terms of service ("terms", "terms of service") carefully
      before using weeklygrowthgoals.com website (the "service") operated by
      Digital Dynasty Design ("us", 'we", "our").
    </p>

    <h3>Conditions of Use</h3>

    <p>
      We will provide their services to you, which are subject to the conditions
      stated below in this document. Every time you visit this website, use its
      services or make a purchase, you accept the following conditions. This is
      why we urge you to read them carefully.
    </p>

    <h3>Privacy Policy</h3>

    <p>
      Before you continue using our website we advise you to read our
      <a target="_blank" class="underline font-medium" href="/privacy.html">privacy policy</a> regarding our user data
      collection. It will help you better understand our practices.
    </p>

    <h3>Copyright</h3>

    <p>
      Content published on this website (digital downloads, images, texts,
      graphics, logos) is the property of [name] and/or its content creators and
      protected by international copyright laws. The entire compilation of the
      content found on this website is the exclusive property of [name], with
      copyright authorship for this compilation by [name].
    </p>

    <h3>Communications</h3>

    <p>
      The entire communication with us is electronic. Every time you send us an
      email or visit our website, you are going to be communicating with us. You
      hereby consent to receive communications from us. If you subscribe to the
      news on our website, you are going to receive regular emails from us. We
      will continue to communicate with you by posting news and notices on our
      website and by sending you emails. You also agree that all notices,
      disclosures, agreements and other communications we provide to you
      electronically meet the legal requirements that such communications be in
      writing.
    </p>

    <h3>Applicable Law</h3>

    <p>
      By visiting this website, you agree that the laws of the [your location],
      without regard to principles of conflict laws, will govern these terms of
      service, or any dispute of any sort that might come between [name] and
      you, or its business partners and associates.
    </p>

    <h3>Disputes</h3>

    <p>
      Any dispute related in any way to your visit to this website or to
      products you purchase from us shall be arbitrated by state or federal
      court [your location] and you consent to exclusive jurisdiction and venue
      of such courts.
    </p>

    <h3>Comments, Reviews, and Emails</h3>

    <p>
      Visitors may post content as long as it is not obscene, illegal,
      defamatory, threatening, infringing of intellectual property rights,
      invasive of privacy or injurious in any other way to third parties.
      Content has to be free of software viruses, political campaign, and
      commercial solicitation. We reserve all rights (but not the obligation) to
      remove and/or edit such content. When you post your content, you grant
      [name] non-exclusive, royalty-free and irrevocable right to use,
      reproduce, publish, modify such content throughout the world in any media.
    </p>

    <h3>License and Site Access</h3>

    <p>
      We grant you a limited license to access and make personal use of this
      website. You are not allowed to download or modify it. This may be done
      only with written consent from us.
    </p>

    <h3>User Account</h3>

    <p>
      If you are an owner of an account on this website, you are solely
      responsible for maintaining the confidentiality of your private user
      details (username and password). You are responsible for all activities
      that occur under your account or password. We reserve all rights to
      terminate accounts, edit or remove content and cancel orders in their sole
      discretion.
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
h2,
h3 {
  @apply my-3;
}

section::-webkit-scrollbar {
  width: 0.3em;
}

section::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

section::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.h-inherit {
  max-height: inherit;
}
</style>