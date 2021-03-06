<?php

namespace Drupal\schema_job_posting\Plugin\metatag\Tag;

use Drupal\schema_metatag\Plugin\metatag\Tag\SchemaDateBase;

/**
 * Provides a plugin for the 'schema_job_posting_valid_through' meta tag.
 *
 * - 'id' should be a globally unique id.
 * - 'name' should match the Schema.org element name.
 * - 'group' should match the id of the group that defines the Schema.org type.
 *
 * @MetatagTag(
 *   id = "schema_job_posting_valid_through",
 *   label = @Translation("validThrough"),
 *   description = @Translation("REQUIRED BY GOOGLE. The date after which this job posting is not valid anymore."),
 *   name = "validThrough",
 *   group = "schema_job_posting",
 *   weight = -5,
 *   type = "string",
 *   secure = FALSE,
 *   multiple = FALSE
 * )
 */
class SchemaJobPostingValidThrough extends SchemaDateBase {

}
