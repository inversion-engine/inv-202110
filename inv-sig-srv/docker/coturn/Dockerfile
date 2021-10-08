FROM alpine AS tmp
RUN apk --update add openssl && \
  openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 -nodes \
    -keyout turn_server_pkey.pem -out turn_server_cert.pem \
    -subj "/CN=$(hexdump -ve '1/1 "%.2x"' -n 32 /dev/urandom)" && \
  chmod a+r turn_server*

FROM coturn/coturn:4.5-alpine
COPY turnserver.conf /etc/coturn/turnserver.conf
COPY --from=tmp turn_server_pkey.pem /etc/coturn/turn_server_pkey.pem
COPY --from=tmp turn_server_cert.pem /etc/coturn/turn_server_cert.pem
CMD ["--log-file=stdout", "--external-ip=$(detect-external-ip)"]
