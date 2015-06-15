orion.config.add('AWS_API_KEY', 'aws')
orion.config.add('AWS_API_SECRET', 'aws', {secret: true})
orion.config.add('AWS_S3_BUCKET', 'aws')

/**
 * Sets the credentials when the server starts
 */
S3.config = {
  key: orion.config.get('AWS_API_KEY'),
  secret: orion.config.get('AWS_API_SECRET'),
  bucket: orion.config.get('AWS_S3_BUCKET')
};