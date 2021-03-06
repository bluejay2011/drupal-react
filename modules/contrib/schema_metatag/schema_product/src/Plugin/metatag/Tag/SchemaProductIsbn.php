<?php

namespace Drupal\schema_product\Plugin\metatag\Tag;

use Drupal\schema_metatag\Plugin\metatag\Tag\SchemaNameBase;

/**
 * Provides a plugin for the 'isbn' meta tag.
 *
 * - 'id' should be a globally unique id.
 * - 'name' should match the Schema.org element name.
 * - 'group' should match the id of the group that defines the Schema.org type.
 *
 * @MetatagTag(
 *   id = "schema_product_isbn",
 *   label = @Translation("isbn"),
 *   description = @Translation("RECOMMENDED BY GOOGLE. Populate one of sku, gtin8, gtin12, gtin13, gtin14, isbn, or mpn."),
 *   name = "isbn",
 *   group = "schema_product",
 *   weight = 7,
 *   type = "string",
 *   secure = FALSE,
 *   multiple = FALSE
 * )
 */
class SchemaProductIsbn extends SchemaNameBase {

}
