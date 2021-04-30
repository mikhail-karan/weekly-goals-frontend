<template>
  <section class="mx-2 max-h-full overflow-auto">
    <div @click="$emit('go-back')" class="h-4">
      <i class="las la-angle-left"></i>
    </div>
    <h2>Privacy Policy</h2>
    <p>
      The following is the privacy policy for the Weekly Growth Goals
      application. It is created by Digital Dynasty Design which is located at
      69 Hepburn Crescent,L9C7S5 Hamilton Ontario, Canada.
    </p>
    <h3>What personal information we collect</h3>
    <p>During the registration process we collect and store users emails</p>
    <h3>How we collect it</h3>
    <p>
      We collect emails with a signup form that is sent to our backend servers
      and stored in our users database
    </p>
    <h3>Why we collect it/How we use it</h3>
    <p>
      We use the emails to be able to reach out to users for functional portions
      of the application (example: password recovery). We also have a opt-in
      checkbox to sign up for future marketing correspondence
    </p>
    <h3>How long we keep the personal information</h3>
    <p>
      As per laws requirements, we keep personal informationf or 5 years, unless
      specifically asked to remove.
    </p>
    <h3>How we secure it</h3>
    <p>
      We rely on a 3rd party backend system call strapi.io which employs common
      authentication pratices to keep information such as passwords, secure.
      User emails and usernames will be avaliable to other logged in users
    </p>
    <h3>Whether or not we share it with any third parties</h3>
    <p>
      No 3rd parties will have access to personal information such as user
      emails, passwords or usernames
    </p>
    <h3>
      Any rights our users have when it comes to our collection, use or
      retention of their personal information Your contact information
    </h3>
    <p>
      A user can delete their account which will remove the users information
      from our servers.
    </p>
  </section>
</template>

<script>
export default {};
</script>
