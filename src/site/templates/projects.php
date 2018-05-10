<?php snippet('header') ?>

  <main class="main projects" role="main">

    <h1><?= $page->title()->html() ?></h1>

    <section>
      <ul>
      <?php foreach($page->children() as $item): ?>
        <li class="project">
          <h2><?php echo $item->title() ?></h2>
          <p><?php echo $item->subtitle() ?></p>
        </li>
      <?php endforeach ?>
      </ul>
    </section>
      
  </main>

<?php snippet('footer') ?>