<script>
  import { onMount } from 'svelte';

  import {
    f7,
    f7ready,
    App,
    Panel,
    Views,
    View,
    Popup,
    Page,
    Navbar,
    Toolbar,
    NavRight,
    Link,
    Block,
    BlockTitle,
    LoginScreen,
    LoginScreenTitle,
    List,
    ListItem,
    ListInput,
    ListButton,
    BlockFooter
  } from 'framework7-svelte';
  import routes from '../js/routes';
  import store from '../js/store';


  // Framework7 Parameters
  let f7params = {
    name: 'Topaz', // App name
    theme: 'ios',
    // App store
    store: store,
    // App routes
    routes: routes,
  };
</script>

<App { ...f7params } >


  <!-- Views/Tabs container -->
  <Views tabs class="safe-areas">
    <!-- Tabbar for switching views-tabs -->
    <Toolbar tabbar labels bottom>
      <Link tabLink="#view-home" tabLinkActive iconIos="f7:house_fill" text="Home" />
      <Link tabLink="#view-app" iconIos="f7:layers_alt_fill" text="Apps" />
      <Link tabLink="#view-settings" iconIos="f7:gear" text="Settings" />
    </Toolbar>

    <!-- Your main view/tab, should have "view-main" class. It also has "tabActive" prop -->
    <View id="view-home" main tab tabActive url="/" />

    <!-- Catalog View -->
    <View id="view-app" name="apps" tab url="/apps/" />

    <!-- Settings View -->
    <View id="view-settings" name="settings" tab url="/settings/" />

  </Views>
</App>
