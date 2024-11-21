# Alias pour la commande Symfony console
alias sf="docker-compose exec app php bin/console"

# Alias pour vider le cache de Symfony
alias sfcl="sf cache:clear"

# Alias pour vérifier les erreurs de lint dans le code YAML
alias sfyml="sf lint:yaml config"

# Alias pour les migrations de la base de données
alias sfmigrate="sf doctrine:migrations:migrate"

# Alias pour générer des entités
alias sfge="sf make:entity"