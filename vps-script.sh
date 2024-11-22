docker compose pull
docker compose --env-file .env.prod up -d
docker image prune -f
echo "Mise à jour effectué avec succès le : `date`" >> log-update-app.txt
exit
